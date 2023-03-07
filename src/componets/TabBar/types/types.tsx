export interface TabBarProps {
  tabContent: {
    title: string;
    content: React.ReactNode;
  }[];
}

export interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}
