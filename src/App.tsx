import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, chatboxEllipsesOutline, homeOutline, notificationsOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Mensagem from './pages/Mensagem';
import Notificacao from './pages/Notificacao';
import Publicacao from './pages/Publicacao';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/inicio">
            <Inicio />
          </Route>
          <Route exact path="/mensagem">
            <Mensagem />
          </Route>
          <Route path="/publicacao">
            <Publicacao />
          </Route>
          <Route path="/notificacao">
            <Notificacao />
          </Route>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="mensagens" href="/mensagem">
            <IonIcon icon={chatboxEllipsesOutline} />
            <IonLabel>Mensagens</IonLabel>
          </IonTabButton>
          <IonTabButton tab="publicacao" href="/publicacao">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Publicação</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notifications" href="/notificacao">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Notificações</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
