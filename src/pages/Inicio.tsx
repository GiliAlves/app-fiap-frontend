import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import logo from '../assets/logo.png';
import Avatar from '../components/avatar.component';
import CardPost from '../components/card-post.component';
import CardPublicaction from '../components/card-publicaction.component';
import Searchbar from '../components/search.component';
import Thumbnail from '../components/thumbnails.component';

import { Component } from 'react';
import description1 from '../assets/description1.png';
import perfil from '../assets/perfil.png';
import CardPerfil from '../components/card-perfil.component';
import api from '../services/api.service';
import './Inicio.css';
import { Publicacao } from '../interfaces/publicacao.interface';

class Inicio extends Component {
  publicacoes: Publicacao[] = [{
    id: '',
    user: {  
      name: 'Matilde da Silva',
      description: 'Detalhes da Matilde da Silva descrição do seu perfil',
      alt: 'perfil', 
      src: perfil
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lobortis, praesent proin suscipit hac lacinia convallis vivamus taciti, neque ullamcorper quisque pretium felis eu imperdiet iaculis. Facilisis fermentum netus mi placerat per maximus morbi condimentum, eleifend pellentesque semper quis suscipit vivamus pharetra consectetur, natoque fusce malesuada rhoncus eu tristique senectus.',
    img: {
      alt:'descricao da imagem',
      src: description1 
    }  
  }]
  
  state = { 
    publicacoes: this.publicacoes
  }
  
  async componentDidMount() {
    const response = await api.get('');    
    this.setState({ publicacoes: response.data });
  }
  
  
  render() {
  
    const { publicacoes } = this.state;
    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <Thumbnail 
              slot="start" 
              src={logo}
              alt="logo" />
            <Searchbar 
              animated={true}
              placeholder="Pesquisar"/>
            <Avatar
              class='perfil-avatar'
              slot="end" 
              src={perfil}
              alt="perfil"/>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Inicio</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonGrid>
            <IonRow>
              { isPlatform('desktop') 
                ? (
                  <IonCol size="6" size-md="3" size-lg="3" offset-xl="2" size-xl="2">
                    <CardPerfil/>            
                  </IonCol>) 
                : ( <></>)
              }
              <IonCol size={isPlatform('desktop') ? '6' : 'auto'} size-md="6" size-lg="4">
                <IonRow>
                  <IonCol>
                    <CardPost />            
                  </IonCol>
                </IonRow>
                { publicacoes.map(publicacao => (
                  <IonRow key={ publicacao.id }>
                    <IonCol>
                      <CardPublicaction 
                        user={
                          {
                            name: publicacao.user.name,
                            description: publicacao.user.description,
                            alt: publicacao.user.alt, 
                            src: publicacao.user.src
                          }}
                        description={publicacao.description}
                        img={
                          { 
                            alt: publicacao.img.alt,
                            src: publicacao.img.src
                          }}          
                        />
                    </IonCol>
                  </IonRow>
                ))}
              </IonCol>
              { isPlatform('desktop') 
                ? (
                <IonCol size="6" size-md="3" size-lg="3" size-xl="2">
                  <CardPerfil/> 
                </IonCol>) 
                : (<></>)
              }
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
};

export default Inicio;
