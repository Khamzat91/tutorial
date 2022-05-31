import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css'

const Lists = ({comments, setComments}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const handleClickAdd = () => {
    const data = {
      fullName: name,
      email: email,
      createdAt: new Date().toLocaleDateString("ru-RU",{year: 'numeric',month: 'numeric', day: 'numeric'}),
      text: text,
      id: Math.random()
    }
    setComments([...comments, data]);
    setName('');
    setEmail('');
    setText('');
  }

  const handleChange = (e) => {
    if (e.target.name === 'name'){
      setName(e.target.value)
    }else if (e.target.name === 'email'){
      setEmail(e.target.value)
    }else if (e.target.name === 'text'){
      setText(e.target.value)
    }
  }

  const handleRemove = (id) => {
    setComments(comments.filter((i) => i.id !== id))
    localStorage.setItem('comments', JSON.stringify(comments.filter((i) => i.id !== id)))
  }

React.useEffect(() => {
if (comments.length){
  localStorage.setItem('comments', JSON.stringify(comments))
}
}, [comments])

  React.useEffect(() => {
 if (localStorage.getItem('comments')){
   setComments(  JSON.parse(localStorage.getItem('comments')))
 }
  }, [])
  return (
    <div className="item">
      {comments.length === 0 ? <h3 className="list__title">Оставьте отзыв:</h3> : <h3 className="list__title">Отзывы:</h3>}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {comments.map((i) => <ListItem key={i.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={i.fullName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {i.text} &nbsp;
                </Typography>
                {i.createdAt}
                <br/>
               <IconButton onClick={() => handleRemove(i.id)} aria-label="delete">
                  <DeleteIcon/>
                </IconButton>
              </React.Fragment>
            }
          />
        </ListItem>)}
        <Divider variant="inset" component="li" />
      </List>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h2 className="box__title">Обратная связь:</h2>
          <TextField
            onChange={handleChange}
            name="name"
            required
            id="outlined-required"
            placeholder="Имя"
          />
          <TextField
            onChange={handleChange}
            name="email"
            required
            id="outlined-required"
            placeholder="Почта"
          />
          <TextField
            onChange={handleChange}
            name="text"
            required
            id="outlined-required"
            placeholder="Текст..."
          />
        </div>
      </Box>
      <Button className="box__button" onClick={handleClickAdd} variant="contained">
        Отправить
      </Button>
    </div>
  );
};

export default Lists;