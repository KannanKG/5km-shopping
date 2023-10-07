import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListSubheader, ListItemText, Checkbox, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ShoppingList } from '../config';

function ToDoList(props: any) {
    const [checked, setChecked] = React.useState([1]);

    return (
        <List sx={{ mb: 2 }}>
            {/* {data && data.map(({ item_name, category_name, month, week }) => (
            <React.Fragment key={item_name + category_name}>
                {id === 1 && (
                <ListSubheader sx={{ zIndex: '1'}}>
                    Today
                </ListSubheader>
                )}
                {id === 5 && (
                <ListSubheader sx={{ zIndex: '1'}}>
                    Yesterday
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
                    <ListItemText primary={primary} secondary={secondary} secondaryTypographyProps={{
                        display: "block",
                        maxHeight: "2.4rem",
                        lineHeight: "1.2rem",
                        overflow: "hidden"
                    }} />
                </ListItem>
            </React.Fragment>
            ))} */}
        </List>
    );
}

export default ToDoList;