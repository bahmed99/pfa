import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import axios from "axios"

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            message:''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email, age,message ,cin} = steps;

        this.setState({ name, email, age ,message,cin});
    }

    render() {
        const { name, email, age,message ,cin} = this.state;
        console.log({ name, email, age,message ,cin})
        return (
            <div style={{ width: '100%' ,height:"100%",wordBreak:'keep-all' }}>
                <h5>Vos coordonnées</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom:</td>
                            <td>{name.value}</td>
                        </tr>
                       
                        <tr>
                            <td>Âge:</td>
                            <td>{age.value}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{email.value}</td>
                        </tr>
                        {message.value? <tr>
                            <td>Message:</td>
                            <td >{message.value}</td>
                        </tr>:""}
                       {cin.value? <tr>
                            <td>Cin:</td>
                            <td >{cin.value}</td>
                        </tr>:""}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Review2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            cin:'',
            tel:''
            
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email, age,cin,tel} = steps;

        this.setState({ name, email, age ,cin,tel});
    }

    render() {
        const { name, email, age ,cin ,tel} = this.state;
   
        return (
            <div style={{ width: '100%' ,height:"100%",wordBreak:'keep-all' }}>
                <h5>Vos coordonnées</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom:</td>
                            <td>{name.value}</td>
                        </tr>
                       
                        <tr>
                            <td>Âge:</td>
                            <td>{age.value}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{email.value}</td>
                        </tr>

                        <tr>
                            <td>Cin:</td>
                            <td >{cin.value}</td>
                        </tr>
                        <tr>
                            <td>Tel:</td>
                            <td >{tel.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Send extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            message:''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email, age,message ,cin} = steps;

        this.setState({ name, email, age ,message,cin});
        axios.post("http://localhost:3001/contact",{name:name.value,email:email.value,age:age.value,message:message.value}).then(res=>{

        }).catch(err=>{
            console.log(err)
        })
    }
    

    render() {
       
        return (
            <div style={{backgroundColor:'transparent'}} >
                
            </div>
        );
    }
}

class Inscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            tel:'',
            cin:''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email, age,tel ,cin} = steps;

        this.setState({ name, email, age ,tel,cin});
        axios.post("http://localhost:3001/contact/inscription",{name:name.value,email:email.value,age:age.value,tel:tel.value,cin:cin.value}).then(res=>{

        }).catch(err=>{
            console.log(err)
        })
    }
    

    render() {
       
        return (
            <div style={{backgroundColor:'transparent'}} >
                
            </div>
        );
    }
}





Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

const theme = {
    background: '#f5f8fb',

    headerBgColor: '#369579',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#369579',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                // opened={false}
                    // speechSynthesis={{ enable: true, lang: 'fr' }}
                
                    placeholder="Taper votre message..."
                    headerTitle="Support"
                    floating={true}
                    steps={[
                        {
                            id: '1',
                            message: 'Bienvenue chez iDrive Gears',
                            trigger: 'choice',
                        },
                        {
                            id: 'choice',
                            options: [
                                { value: 'Oui', label: 'Envoyer un message', trigger: '2' },
                                { value: 'Non', label: `S'inscrire`, trigger: 'inscription' },
                                { value: 'Non1', label: `Rien`, trigger: 'final' },
                            ],
                        },
                        {
                            id: '2',
                            message: 'Quelle est votre nom?',
                            trigger: 'name',
                        },
                        {
                            id: 'name',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre nom';}
                                
                                

                                return true;
                            },
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'Bonjour {previousValue},ravi de faire votre connaissance!',
                            trigger: 'pre',
                          },
                        
                        {
                            id: 'pre',
                            message: 'Quelle est votre âge?',
                            trigger: 'age',
                        },
                        {
                            id: 'age',
                            user: true,
                            trigger: '7',
                            validator: (value) => {
                                if (isNaN(value)) {
                                    return 'Il faut taper un nombre';
                                } else if (value < 0) {
                                    return 'Le nombre doit être positive';
                                } else if (value > 120) {
                                    return `${value}? Allez!`;
                                }

                                return true;
                            },
                        },
                        {
                            id: '7',
                            message: 'Taper votre email',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: '8',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre email';
                                } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                                    return 'Format Invalide';}
                                

                                return true;
                            },
                        },
                        {
                            id: '8',
                            message: 'Taper votre message',
                            trigger: 'message',
                        },
                        {
                            id: 'message',
                            user: true,
                            trigger: '9',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper un message';}
                                
                                

                                return true;
                            },
                        },
                        {
                            id: '9',
                            message: 'Parfait! vérifier vos coordonnées',
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            asMessage: true,
                            trigger: 'update',
                        },
                        {
                            id: 'update',
                            message: 'Voulez-vous changer quelque chose?',
                            trigger: 'update-question',
                        },
                        {
                            id: 'update-question',
                            options: [
                                { value: 'Oui', label: 'Oui', trigger: 'update-yes' },
                                { value: 'Non', label: 'Non', trigger: 'end-message' },
                            ],
                        },
                        {
                            id: 'update-yes',
                            message: 'Quel champs voulez-vous changer?',
                            trigger: 'update-fields',
                        },
                        {
                            id: 'update-fields',
                            options: [
                                { value: 'name', label: 'Name', trigger: 'update-name' },
                                { value: 'age', label: 'Âge', trigger: 'update-age' },
                                { value: 'email', label: 'Email', trigger: 'update-email' },
                                { value: 'message', label: 'Message', trigger: 'update-message' },
                                
                            ],
                        },
                        {
                            id: 'update-name',
                            update: 'name',
                            trigger: '9',
                        },
                        {
                            id: 'update-message',
                            update: 'message',
                            trigger: '9',
                        },
                        {
                            id: 'update-email',
                            update: 'email',
                            trigger: '9',
                        },
                        {
                            id: 'update-age',
                            update: 'age',
                            trigger: '9',
                        },
                        {
                            id: 'end-message',
                            message: 'Merci! votre message est bien envoyé!',
                            trigger: '10',
                           
                            
                        },
                        {
                            id: '10',
                            trigger: 'other',
                            component: <Send />,
                            
                        },
                        
                        {
                            id: 'other',
                            message: 'Voulez-vous envoyer un autre message?',
                            trigger: 'choix',
                          
                        },
                        {
                            id: 'choix',
                            options: [
                                { value: 'Oui', label: 'Oui', trigger: '1' },
                                { value: 'Non', label: 'Non', trigger: 'final' },
                            ]
                        },
                        {
                            id: 'inscription',
                            message: 'Quelle est votre nom?',
                            trigger: 'name',
                        },
                        {
                            id: 'name',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre nom';}
                                
                                

                                return true;
                            },
                            user: true,
                            trigger: 'msg',
                        },
                        {
                            id: 'msg',
                            message: 'Bonjour {previousValue},ravi de faire votre connaissance!',
                            trigger: 'ages',
                          },
                        
                        {
                            id: 'ages',
                            message: 'Quelle est votre âge?',
                            trigger: 'age',
                        },
                        {
                            id: 'age',
                            user: true,
                            trigger: 'mailC',
                            validator: (value) => {
                                if (isNaN(value)) {
                                    return 'Il faut taper un nombre';
                                } else if (value < 0) {
                                    return 'Le nombre doit être positive';
                                } else if (value > 120) {
                                    return `${value}? Allez!`;
                                }

                                return true;
                            },
                        },
                        {
                            id: 'mailC',
                            message: 'Taper votre email',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: 'mailCin',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre email';
                                } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                                    return 'Format Invalide';}
                                

                                return true;
                            },
                        },
                        {
                            id: 'mailCin',
                            message: 'Taper votre numéro cin',
                            trigger: 'cin',
                        },
                        {
                            id: 'cin',
                            user: true,
                            trigger: 'telV',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre numéro cin';
                                } 
                                

                                return true;
                            },
                        },
                        {
                            id: 'telV',
                            message: 'Taper votre numéro de téléphone',
                            trigger: 'tel',
                        },
                        {
                            id: 'tel',
                            user: true,
                            trigger: 'valida',
                            validator: (value) => {
                                if ((!value)) {
                                    return 'Il faut taper votre de téléphone';
                                } 
                                

                                return true;
                            },
                        },
                        {
                            id: 'valida',
                            message: 'Parfait! vérifier vos coordonnées',
                            trigger: 'reviewInsc',
                        },
                        {
                            id: 'reviewInsc',
                            component: <Review2 />,
                            asMessage: true,
                            trigger: 'updateInsc',
                        },
                        {
                            id: 'updateInsc',
                            message: 'Voulez-vous changer quelque chose?',
                            trigger: 'update-questionInsc',
                        },
                        {
                            id: 'update-questionInsc',
                            options: [
                                { value: 'Oui', label: 'Oui', trigger: 'update-yesInsc' },
                                { value: 'Non', label: 'Non', trigger: 'end-messageInsc' },
                            ],
                        },
                        {
                            id: 'update-yesInsc',
                            message: 'Quel champs voulez-vous changer?',
                            trigger: 'update-fields',
                        },
                        {
                            id: 'update-fields',
                            options: [
                                { value: 'name', label: 'Name', trigger: 'update-nameInsc' },
                                { value: 'age', label: 'Âge', trigger: 'update-ageInsc' },
                                { value: 'email', label: 'Email', trigger: 'update-emailInsc' },
                                { value: 'cin', label: 'Cin', trigger: 'update-cinInsc' },
                                { value: 'tel', label: 'Tel', trigger: 'update-telInsc' },
                            ],
                        },
                        {
                            id: 'update-nameInsc',
                            update: 'name',
                            trigger: 'valida',
                        },
                        {
                            id: 'update-emailInsc',
                            update: 'email',
                            trigger: 'valida',
                        },
                        {
                            id: 'update-ageInsc',
                            update: 'age',
                            trigger: 'valida',
                        },
                        {
                            id: 'update-cinInsc',
                            update: 'cin',
                            trigger: 'valida',
                        },
                        {
                            id: 'update-telInsc',
                            update: 'tel',
                            trigger: 'valida',
                        },
                        {
                            id: 'end-messageInsc',
                            message: 'Merci! votre inscription est bien envoyé!',
                            trigger: 'insci',
                           
                            
                        },
                        {
                            id: 'insci',
                            trigger: 'choice',
                            component: <Inscription />,
                            
                        },
                        {
                            id: 'final',
                            message: 'Merci pour votre visite!',
                            end: true,
                        }
                    ]}
                />
            </ThemeProvider>
        );
    }
}

export default SimpleForm;