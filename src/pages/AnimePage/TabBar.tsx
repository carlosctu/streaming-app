import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

interface TabBarProps {
  tabContent: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function TabBar(props: TabBarProps) {
  const [value, setValue] = useState(0);
  const handleChange = (_: number, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        style={{ padding: "0px" }}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          style={{ padding: "0" }}
          value={value}
          onChange={handleChange as never}
        >
          {Array.apply(null, {
            length: props.tabContent.length,
          } as Array<number>).map((_, index) => (
            <Tab label={props.tabContent[index].title} />
          ))}
        </StyledTabs>
      </Box>
      <div style={{ paddingTop: "12px" }}>
        {Array.apply(null, {
          length: props.tabContent.length,
        } as Array<number>).map((_, index) => (
          <TabPanel value={value} index={index}>
            {props.tabContent[index].content}
          </TabPanel>
        ))}
      </div>
    </Box>
  );
}

const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "&&& .Mui-selected": {
    fontSize: "15px",
    color: "#D93A41",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#D93A41",
  },
});
