import { Component } from 'react';
import { Button, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { RouteItem } from '../../routes/types';
import Iconfont from '../../components/Iconfont';
import './style.less';
import { 
  getInstalledApps,
 } from '../../api';
import { mainRoutes } from '../../routes';
const { Header, Content } = Layout;

const iconMap: {[key: string]: string} = {
  'core': 'iconicon-xitongshezhi',
  'camera': "iconicon-shipinzhibo",
  'cameras': "iconicon-shipinzhibo",
  'monitor': "iconicon-shishiyinhuan",
  'analyse': "iconicon-shujufenxi",
  'events': "iconicon-shijianzhongxin",
  'stereo': "iconicon-shijianguangbo",
  'aifactory': "iconicon-AIgongzuofang",
  'files': "iconicon-shijianzhongxin",
  'alarm': "iconicon-gaojingzhongxin",
  'employee': 'icongongrenshenfenku',
};

type MainFrameProps = {
  active: string,
  menuData: Array<RouteItem>,
  children: any,
  appName: string,
};
type AppInfo = {
  code: string,
  name: string,
  icon?: string,
  hasFrontend?: boolean,
  hide?: boolean,
};

export default class MainFrame extends Component<MainFrameProps> {
  constructor(props: MainFrameProps) {
    super(props)
  }
  state = {
    selectedKeys: [],
    collapsed: false,
    updateTime: '-',
    appList: []
  };
  componentDidMount() {
    //路由对应Menu高亮部分
    this.setState({
      selectedKeys: [ '/' + window.location.hash.split('#')[1].split('/')[1] ],
    });

    getInstalledApps().then((res: any) => {
      if (res.code === 200) {
        this.setState({
          appList: res.data.apps.map((app: AppInfo) => ({...app, icon: `${iconMap[app.code] || 'iconicon-xitongshezhi'}-1`}))
        });
      }
    })
  }
  handleClick = (e: any) => {
    this.setState({ selectedKeys: [e.key] });
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  selectedMenuName() {
    let menu = this.props.menuData.find((i: RouteItem) => `${i.path}` === this.state.selectedKeys[0]);
    if (menu) {
      return menu.name;
    }
    return ;
  }

  render() {
    const { selectedKeys, collapsed, appList } = this.state;
    const home = window.location.pathname.indexOf('/<%= name %>/') > -1 ? '../' : './';

    return (
      <Layout className="site-layout-app">
        <Header className="site-layout-background main-frame-header">
          <Button
            className="app-menu-toggle-btn"
            onClick={this.toggleCollapsed}
            type="text"
          >
            <Iconfont type="iconmenu-liebiao" />
          </Button>
          <div
            style={{
              display: collapsed ? 'block' : 'none',
              height: 'calc(100vh - 48px)',
              position: 'fixed',
              top: 48,
              left: 0,
              width: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
            }}
            onClick={this.toggleCollapsed}
          >
            <div
              className="top-menu-wrap"
              style={{
                background: '#34508D',
                width: 224,
                height: '100%',
                padding: 10,
                boxShadow: '2px 0px 6px 0px rgba(0, 21, 41, 0.35)',
              }}
            >
              <Menu
                theme="dark"
                selectedKeys={[this.props.appName]}
                defaultSelectedKeys={[this.props.appName]}
              >
                {
                  appList.filter((app: AppInfo) => (app.hasFrontend && !app.hide)).map((menu: AppInfo) => 
                    <Menu.Item key={`${menu.code}`} icon={<Iconfont type={menu.icon} />}>
                      <a href={`${home}${menu.code}/`}>{menu.name}</a>
                    </Menu.Item>
                  )
                }
              </Menu>
            </div>
          </div>
          <div className="logo" title="回到桌面"><a href={`${home}core/`}><img alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"}/></a></div>
          <div className="menu-wrap">
            <Menu
              className="side-menu-wrap"
              selectedKeys={selectedKeys}
              theme="dark"
              mode="horizontal"
            >
              {
                mainRoutes.filter(i => !i.hidden).map((menu) => 
                  <Menu.Item
                    key={menu.path} onClick={this.handleClick}
                    icon={<Iconfont style={{fontSize: '16px'}}
                    type={menu.icon}
                  />}>
                    <Link to={menu.redirect || menu.path} >{menu.name}</Link>
                  </Menu.Item>
                )
              }
            </Menu>
          </div>
        </Header>
        <Content className="site-layout-background app-content" >
          { this.props.children }
        </Content>
      </Layout>
    );
  }
}