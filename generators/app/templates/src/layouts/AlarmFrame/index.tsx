import { Component } from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { RouteItem } from '../../routes/types';
import './style.less';
import Iconfont from '../../components/Iconfont';

type AlarmFrameProps = {
  menuData: Array<RouteItem>,
  children: any,
};

export default class AlarmFrame extends Component<AlarmFrameProps> {
  constructor(props: AlarmFrameProps) {
    super(props)
  }
  state = {
    selectedKeys: [ window.location.hash.split('#')[1] ],
    collapsed: false,
    updateTime: '-',
    appList: []
  };
  componentDidMount() {
    //路由对应Menu高亮部分
    this.setState({
      selectedKeys: [ window.location.hash.split('#')[1] ],
    });
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
    const { selectedKeys } = this.state;
    const { menuData = [] } = this.props;

    return (
      <div style={{ width: '100%' }} className="alarm-frame">
        <h3 className="content-title">
        <Menu selectedKeys={[window.location.hash.split('#')[1]]} mode="horizontal">
          {
            menuData.map(menu => (
              <Menu.Item key={menu.path} onClick={this.handleClick}>
                <Link to={menu.path} >{menu.name}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
        </h3>
        <div style={{margin: 16, height: 'calc(100vh - 126px)' }}>{this.props.children}</div>
      </div>
    );
  }
}