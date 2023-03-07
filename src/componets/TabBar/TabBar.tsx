import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { TabBarProps, TabPanelProps } from "./types/types";

export default function TabBar(props: TabBarProps) {
  const [value, setValue] = useState(0);
  const handleChange = (_: number, newValue: number) => {
    setValue(newValue);
  };

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

  function TabTitleSection() {
    return (
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
    );
  }

  function TabContentSection() {
    return (
      <div style={{ paddingTop: "12px" }}>
        {Array.apply(null, {
          length: props.tabContent.length,
        } as Array<number>).map((_, index) => (
          <TabPanel value={value} index={index}>
            {props.tabContent[index].content}
          </TabPanel>
        ))}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabTitleSection />
      </Box>
      <TabContentSection />
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
