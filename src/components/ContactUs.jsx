import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import {Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './css/contactUs.css'

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    marginTop: "1.5rem",
  },
});

const submit = (values) => {
      
      alert(JSON.stringify(values, null, 2));
    
  }

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'name'},
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+977 123-4567890',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const ContactUs = () => {
  
  const classes = useStyles();
  return(
  <form className="form">
   
    <Paper className={classes.paperStyles}>
        <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder }/>
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
            variant="outlined"
            />
        )}
      </label>
    ))}


    <Icon className="form-submit" icon={sendCircle} />
    {/* <button className="form-submit" type="submit" onSubmit={submit}>
      Submit
    </button>  */}
  </Paper>
  </form>
)};

export default ContactUs;