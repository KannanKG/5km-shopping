import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListSubheader, ListItemText, Checkbox, Typography, ToggleButton, ToggleButtonGroup, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { ShoppingList } from '../config';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

function AddShoppingItem(props: any) {
    // const [checked, setChecked] = React.useState([1]);
    
    // const actions = [
    //     { icon: <ShoppingCartOutlinedIcon />, name: 'Shopping' },
    //     { icon: <FormatListBulletedOutlinedIcon />, name: 'ToDo' }
    // ];

    return (
        <>
            <List sx={{ mb: 2 }}>
                {/* {data && data.map(({ item_name, category_name, month, week }) => (
                    <React.Fragment key={item_name + category_name}>
                        {id === 1 && (
                            <ListSubheader sx={{ zIndex: '1'}}>
                                This Month
                            </ListSubheader>
                        )}
                        {id === 5 && (
                            <ListSubheader sx={{ zIndex: '1'}}>
                                Last Month
                            </ListSubheader>
                        )}
                        <ListItem key={id} secondaryAction={
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
                        </ListItem>
                    </React.Fragment>
                ))} */}
            </List>
            <SpeedDial
                ariaLabel="Checklist"
                sx={{ position: 'fixed', bottom: 90, right: 15 }}
                icon={<AddIcon fontSize='small' />}
                FabProps={{size: 'small'}}
                onClick={
                    () => {}
                }
            >
            </SpeedDial>
        </>
    );
}

export default AddShoppingItem;