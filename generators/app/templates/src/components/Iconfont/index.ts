import { createFromIconfontCN } from '@ant-design/icons';

const Iconfont = createFromIconfontCN({
  scriptUrl: [
    `./font/gos-font.js?${(new Date()).valueOf()}`,
    `./font/iqbox-font.js?${(new Date()).valueOf()}`,
  ]
}) as any;

export default Iconfont;