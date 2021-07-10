export interface Level {
  name: string,
  value: number,
  type: string,
  color?: string,
}

export interface Tag {
  name: string,
  code: string,
  group: string,
  icon: string,
  level: number
}
export interface Algorithm{
  code: string,
  name: string,
  tags: Tag[],
}
export interface Alarm {
  id: string,
  status: string,
  device: string,
  deviceName: string,
  tag: Tag,
  handleResult: {
    type: string,
    notes: string
  },
  snapshots: string[],
  snapshotUrl: string,
  subjects: string[],
  startTime: number,
  endTime: number,
  level: number,
  createTime: number,
  modifyTime: number
}

export interface Device {
  id: string;
  name: string;
  deviceType: string;
}

export type AlarmDetailsInterface = {
  data?: any,
  index: number,
}
export type AlarmDetailsProps = {
  showPrev: (index: number) => void,
  showNext: (index: number) => void,
  data?: any,
  index?: number,
}

export type Pagination = {
  current: number,
  pageSize: number,
  [key: string]: any
};

export type TagInterface = {
  value: string,
  name: string,
  level: number,
  color: string,
  type: string,
  [key: string]: any
};
