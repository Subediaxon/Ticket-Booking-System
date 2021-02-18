import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import {Paper} from '@material-ui/core'
import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './css/info.css'
import { Link } from 'react-router-dom'

const contactDetails = [
  {
    value: 'Nepal Booking Pvt. Ltd',
    icon: locationIcon,
  },
  { value: '+977 01-0000000', icon: phoneIcon },
  { value: 'support@example.com', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Link>
    
    <Icon icon={icon} key={key} className="info-icon" />
    </Link>
  ))

const Info = () => (
    <Paper>
 
    <h2 className="info-h2">Contact information</h2>
    <section  className="flex-container">
    <image className='company-logo'>
    <img id="main-logo" src="./island-travel-logo.jpg" alt="placeholder company logo"></img>
    </image>
    <section className="info">
  

    <div className="info-details-container">{renderContactDetails()}</div>

    <div className="info-icons-container">{renderIcons()}</div>
  
  </section>
    </section>
    
    
    
  </Paper>
)

export default Info