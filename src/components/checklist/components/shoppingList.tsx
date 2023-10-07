import React, { useEffect } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListSubheader, ListItemText, Checkbox, Typography, ToggleButton, ToggleButtonGroup, SpeedDial, SpeedDialAction, SpeedDialIcon, Paper, InputBase, InputAdornment, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ApiService from '../../../services/Api/ApiService';
import { shopping } from '../../../services/Api/ApiUrls';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Shoppinglist(props: any) {
    // const [checked, setChecked] = React.useState([1]);
    const [ page, setPage ] = React.useState("list");
    const [ yearList, setYearList ] = React.useState<any>([]);
    const [search, setSearch] = React.useState("");
    const [ categoryList, setCategoryList ] = React.useState<Array<string>>([]);
    const today = new Date()

    useEffect(() => {
        ApiService.get(shopping.getShoppingCategories).then(
            (res: any) => {
                if (res.status === 200) {
                    if (Object.keys(res.data).length) {
                        setYearList(Object.keys(res.data))
                        console.log(today.getFullYear())
                    }
                }
            }
        ).catch((err: any) => console.log(err));
    }, []);

    const searchText = () => {
        console.log("api call for " + search )
    }
    
    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                >
                <InputBase
                    startAdornment={
                        <InputAdornment position="end" color="primary">
                            <ManageSearchOutlinedIcon fontSize='small' sx={{ marginRight: "20px" }} />
                        </InputAdornment>
                    }
                    autoFocus
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    value={search}
                    onChange={(event: any) => setSearch(event.target?.value)}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            searchText()
                            ev.preventDefault();
                        }
                    }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" disabled={!search} onClick={searchText}>
                    <SearchIcon color='secondary' />
                </IconButton>
            </Paper>
            {
                page === "list" ? 
                <>
                <List sx={{ mb: 2 }}>
                {yearList.map((year: number) => (
                    <React.Fragment key={year}>
                        {today.getFullYear() == year && (
                            <ListSubheader sx={{ zIndex: '1'}}>
                                This Year ({today.getFullYear()})
                            </ListSubheader>
                        )}
                        {today.getFullYear() + 1 == year && (
                            <ListSubheader sx={{ zIndex: '1'}}>
                                Next Year ({today.getFullYear() + 1})
                            </ListSubheader>
                        )}
                        {today.getFullYear() - 1 == year && (
                            <ListSubheader sx={{ zIndex: '1'}}>
                                Last Year ({today.getFullYear() - 1})
                            </ListSubheader>
                        )}
                        {/* <ListItem key={id} secondaryAction={
                            <Checkbox
                            edge="end"
                            onChange={handleToggle(id)}
                            checked={checked.indexOf(id) !== -1}
                            />
                        }>
                            <ListItemAvatar>
                                <Avatar src={primary[0]} variant="rounded" />
                            </ListItemAvatar>
                            <ListItemText primary={primary} />
                        </ListItem> */}
                    </React.Fragment>
                ))}
            </List>
            <SpeedDial
                ariaLabel="Checklist"
                sx={{ position: 'fixed', bottom: 90, right: 15 }}
                icon={<AddIcon fontSize='small' />}
                FabProps={{size: 'small'}}
                onClick={
                    () => setPage(page === "list" ? "add" : "list")
                }
            >
            </SpeedDial>
            </> : <>
            </>
            }
        </>
    );
}

export default Shoppinglist;