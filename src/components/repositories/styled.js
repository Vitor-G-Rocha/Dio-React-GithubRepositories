import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";


export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
`;
WrapperTabs.tabsRole = 'Tabs';

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 20px;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    background-color: #fff;
    margin: 10px;

    &:focus {
        outline: none;        
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 20px;
    border: 1px solied #ccc;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }

`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;   
    justify-content: flex-start;
    flex-wrap: wrap;   
`;