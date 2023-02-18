import {
    IonButton,
    IonCard, IonCol, IonGrid, IonIcon, IonLabel,
    IonNote,
    IonRow
} from "@ionic/react";
import { bookmarksOutline, paperPlaneOutline } from "ionicons/icons";
import perfil from '../assets/perfil.png';
import Avatar from "./avatar.component";
import "./card-perfil.component.css";

function CardPerfil() {
    return (
        <IonCard class="card-perfil">
            <IonGrid>
                <section className="card-user">
                    <IonRow class="ion-justify-content-center">
                        <Avatar 
                            class="card-perfil-avatar"
                            slot="" 
                            src={perfil}
                            alt="perfil"/>
                    </IonRow>
                    <IonRow class="card-name ion-justify-content-center">
                        <IonLabel>
                            <h2>Matilde da Silva</h2>
                        </IonLabel>
                    </IonRow>
                    <IonRow class="card-detalhe ion-justify-content-center">
                        <IonNote>Detalhes da Matilde da Silva descrição do seu perfil</IonNote>
                    </IonRow>
                </section>
                
                <section className="card-statistic">
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <IonLabel>Quem viu seu perfil</IonLabel>
                        </IonCol>
                        <IonCol size="auto">
                            <IonLabel>900</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <IonLabel>Conexões</IonLabel>
                        </IonCol>
                        <IonCol size="auto">
                            <IonLabel>5.840</IonLabel>
                        </IonCol>
                    </IonRow>
                </section>
                
                <section className="card-fav">
                    <IonButton fill="clear">
                        <IonIcon slot="start" size="large" icon={bookmarksOutline}/>
                        <IonLabel>Meus Itens Salvos</IonLabel>
                    </IonButton>
                </section>
            </IonGrid>
        </IonCard>
    );
}
export default CardPerfil;
