import React, { useEffect, useState } from "react";
import {
  Card,
  Collapse,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    TableCellsIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
 
const Sidebar = () => {
    const [openNav, setOpenNav] = useState(true);
    const [open, setOpen] = useState(0);

    const openSidebarStyle = "flex justify-around items-center duration-300 ease-in";
    const closeSidebarStyle = "flex justify-start items-center duration-300 ease-in w-24";

    const openSidebarWidth = "h-[calc(100vh-2rem)] w-[20rem] max-w-[20rem]";
    const closeSidebarWidth = "h-[calc(100vh-2rem)] w-[5rem] max-w-[5rem] overflow-hidden";
 
    const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        window.addEventListener(
          "resize",
          () => {
                console.log(window.innerWidth);
                if(window.innerWidth <= 960) {
                    setOpenNav(false)
                } else {
                    setOpenNav(true)
                }
            },
        );
    }, []);
    
 
return (
    <>    
    <Card className={(openNav ? openSidebarWidth : closeSidebarWidth)+" ml-2 mt-2 bg-gray-100 p-4 shadow-xl shadow-blue-gray-900/5"}>
        <div className="mb-2 p-4">
            <div className={openNav ? openSidebarStyle : closeSidebarStyle}>
                {
                    openNav ? (
                        <>
                            <div>
                                <Typography variant="h5" color="blue-gray">Digit Manager</Typography>
                                <small>management system</small>
                            </div>
                            <div>
                                <button onClick={() => setOpenNav(!openNav)}>
                                    <Bars3Icon strokeWidth={3} className="h-6 w-6" />
                                </button>
                            </div>
                        </>
                    ) : 
                    (
                        <>
                            <div>
                                <button onClick={() => setOpenNav(!openNav)}>
                                    <Bars3Icon strokeWidth={3} className="h-6 w-6" />
                                </button>
                            </div>
                        </>
                    )
                }
                
            </div>
            
        </div>
        <List>
            <Accordion
                open={open === 1}
                icon={
                    <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                    />
                }
            >
            <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className={openNav ? "inline-block mr-auto font-normal" : "hidden"}>
                    Dashboard
                </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                </ListItem>
                </List>
            </AccordionBody>
            </Accordion>
            <Accordion
            open={open === 2}
            icon={
                <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
            }
            >
            <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                    <TableCellsIcon className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className={openNav ? "inline-block mr-auto font-normal" : "hidden"}>
                    Football
                </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                <ListItem>
                    <ListItemPrefix>
                        
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Matches (ပွဲစဥ်များ)
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Ledger (စာရင်း)
                </ListItem>
                </List>
            </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            {/* <ListItem>
            <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem>
            <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
            </ListItem>
            <ListItem>
            <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
            </ListItem> */}
            <ListItem>
            <ListItemPrefix>
                <PowerIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            <Typography color="blue-gray" className={openNav ? "inline-block mr-auto font-normal" : "hidden"}>
            Log Out
            </Typography>
            
            
            </ListItem>
        </List>
    </Card>
    </>
  );
}

export default Sidebar