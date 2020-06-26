import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import './ContactSection.css'
import { elyes1 } from '../Images'
import SocialMenuArtist from './SocialMenuArtist'
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { setLocale } from 'yup';

export default class ContactSection extends Component {

    constructor(props){
        super(props)
        this.schema = yup.object().shape({
            fullName: yup.string().required(),
            email:yup.string().email().required(),
            subject: yup.string().required(),
            message: yup.string().required()
        })
        setLocale({
            string: {
                required:'Ce champ est requis .',
                }
            })
        this.state={
            fullName:"",
            subject:"",
            message:"",
            email:"",
            errors:{
                fullName:null,
                subject:null,
                message:null,
                email:null
            }
        }


    }

    
    changeInput = (event,type)=>{
        switch (type) {
            case "fullName":
                this.setState({
                    fullName:event.target.value,
                    errors:{
                        ...this.state.errors,
                        fullName:null
                        }
                    })
                    break;
            case "email":
                this.setState({
                    email:event.target.value,
                    errors:{
                        ...this.state.errors,
                        email:null
                        }
                    })
                    break;
                    case "subject":
                        this.setState({
                    subject:event.target.value,
                    errors:{
                        ...this.state.errors,
                        subject:null
                    }
                })
                break;
                case "message":
                    this.setState({
                        message:event.target.value,
                    errors:{
                        ...this.state.errors,
                        message:null
                    }
                })
                break;
        
            default:
                break;
        }
    }


    submitEmail = ()=>{
        let template_params = {
            "from_name": this.state.fullName,
            "message": this.state.message,
            "from_email": this.state.email,

         }
         
         this.schema.isValid(this.state)
         .then((valid)=>{
             if(valid){
                 emailjs.send('artelyes_gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, template_params)
                 .then((result) => {
                     console.log(result.text);
                     this.setState({
                                fullName:"",
                                subject:"",
                                message:"",
                                email:"",
                                errors:{
                                    fullName:null,
                                    subject:null,
                                    message:null,
                                    email:null
                                }
                            })
                    }, (error) => {
                        console.log(error.text);
                    });
                    
                }
                else{
                    this.schema.validate(this.state,{abortEarly: false}).catch((err) =>{
                        var errors={};
                        err.inner.map((item,index) =>{
                            console.log(item.path,item.message)
                            errors[item.path]=item.message
                        })
                        this.setState({
                            errors:errors
                        })
                    })
                }
            })
        }
        

        render() {
        return (
            <div className="contacts-paper">
                    <div className="contacts-paper-info">
                        <h3>
                        Mes coordonnées
                        </h3>
                        <div className="artist-circle artist-circle-3">
                            <img src={elyes1} alt="Elyes Taib Lamine"/>
                        </div>
                            <div className="contacts-paper-info-item description-font">
                                <span><i className="fa fa-phone"></i></span>
                                <span>+336 45 64 74 88</span>
                            </div>
                            <div className="contacts-paper-info-item description-font">
                                <span>
                                     <i className="fa fa-envelope-o"></i>
                                </span>
                                <span>
                                    elies_invite@yahoo.fr
                                </span>
                            </div>
                            <div className="contacts-paper-info-item description-font">
                                <span>
                                    <i className="fa fa-home"></i>
                                </span>
                                <span>
                                Bagnolet, Île-de-France, France
                                </span>
                            </div>
                            <div className="contacts-paper-social-menu">
                                <SocialMenuArtist />
                            </div>
                        </div>
                       
                        <div className="contacts-paper-form">
                        <h3>
                        M'envoyer un message
                        </h3>
                        <div>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Nom Complet" 
                                    variant="outlined"
                                    value={this.state.fullName}
                                    helperText={this.state.errors.fullName}
                                    error={this.state.errors.fullName !=null}
                                    onChange={(event)=>this.changeInput(event,"fullName")} 
                                    />
                            </div>
                            <div>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Email" 
                                    variant="outlined"
                                    value={this.state.email}
                                    helperText={this.state.errors.email}
                                    error={this.state.errors.email !=null}
                                    onChange={(event)=>this.changeInput(event,"email")} 
                                    />
                            </div>
                           
                            <div>
                                <TextField 
                                    className="input-contact"
                                    id="outlined-basic" 
                                    label="Sujet" 
                                    value={this.state.subject}
                                    variant="outlined"
                                    helperText={this.state.errors.subject}
                                    error={this.state.errors.subject !=null} 
                                    onChange={(event)=>this.changeInput(event,"subject")}
                                    />
                            </div>
                            <div>
                                <TextField
                                    className="input-contact"
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    value={this.state.message}
                                    helperText={this.state.errors.message}
                                    error={this.state.errors.message !=null}
                                    onChange={(event)=>this.changeInput(event,"message")}
                                />
                            </div>
                            <div>
                                <a className="readmore" href="javascript:void(0)" style={{marginTop:10}} onClick={()=>this.submitEmail()}>
                                        Envoyer le message
                                    </a>
                            </div>

                        </div>

                    </div>
        )
    }
}
                                                                                                                        
