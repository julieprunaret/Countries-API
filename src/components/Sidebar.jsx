import { List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink tp="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <NavLink tp="/">New Task</NavLink>
      </ListItem>
      <ListItem>
        <NavLink tp="/">Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
