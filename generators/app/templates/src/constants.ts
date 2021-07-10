export const levels = [
  {
    name: "重大",
    value: 1,
    color: "#FF4D4F",
    type: "error",
  },
  {
    name: "一般",
    value: 2,
    color: "#FAAD14",
    type: "warning",
  },
  {
    name: "信息",
    value: 3,
    color: "#508BEE",
    type: "success",
  },
  {
    name: "调试",
    value: 4,
    type: "info",
  },
];
type IconMap = {
  [key: string]: string;
};
type ALARM_STATUS_MAP = {
  [key: string]: any,
}

export const ICONS:IconMap = {
  'vests': 'iconrisk_unVests',
  'unVests': 'iconrisk_unVests',
  'welding': 'iconrisk_welding',
  'hardhat': 'iconrisk_unHardhats',
  'hardhats': 'iconrisk_unHardhats',
  'safeBelt': 'iconrisk_unSafeBelts',
  'unSafeBelts': 'iconrisk_unSafeBelts',
  'borderInvasion': 'iconrisk_inRegionWorkers',
  'smoking': 'iconxiyan',
  'workers': 'icongongren',
  'fire': 'iconhuozaibaojing-',
  'mask': 'iconrespirator',
  'unHardhat': 'iconrisk_unHardhats',
  'unHardhats': 'iconrisk_unHardhats',
  'inRegionWorkers': 'iconrisk_inRegionWorkers',
  'shortClothes': 'iconrisk_shorts',
  'shorts': 'iconrisk_shorts',
  'objectfilters': 'iconjineng-mubiaoguolv',
  'autoPTZ': 'iconjineng-zidongbianjiao',
};

export const ALARM_STATUS: ALARM_STATUS_MAP = {
  ongoing: {
    name: "持续中",
    color: "error",
  },
  closed: {
    name: "已解除",
    color: "success",
  },
};

export const DEVICE_NAMES: Record<string, string> = {
  Speaker: "广播设备",
  Camera: "摄像头",
  Gateway: "网关设备",
  Measuring: '测量仪',
};
