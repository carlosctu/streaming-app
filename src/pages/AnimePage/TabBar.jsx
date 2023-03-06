import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";

export default function TabBar({
    firstContent,
    secondContent,
    thirdContent
}) {
    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                style={{ padding: "0px" }}
                {...other} >
                {value === index && (
                    <Box>
                        <Typography component={'div'} >{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledTabs style={{ padding: "0" }} value={value} onChange={handleChange} >
                <Tab label="Episodes" />
                <Tab label="Trailer" />
                {/* <Tab label={thirdContent.title} /> */}
            </StyledTabs>
        </Box>
        <div style={{ paddingTop: "12px" }}>
            <TabPanel value={value} index={0} >
                {firstContent}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {secondContent}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {thirdContent}
            </TabPanel>
        </div>
    </Box>
}

const StyledTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '&&& .Mui-selected': {
        fontSize: "15px",
        color: "#D93A41",
    },
    '& .MuiTabs-indicator': {
        backgroundColor: "#D93A41",
    },
});