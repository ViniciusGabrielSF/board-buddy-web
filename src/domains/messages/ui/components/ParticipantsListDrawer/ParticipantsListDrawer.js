import Drawer from 'react-modern-drawer';
import { Button } from '../../../../../design-system/components/Button';
import { Divider } from '../../../../../design-system/components//Divider';
import { Typography } from '../../../../../design-system/components/Typography';
import { Icon, Icons } from '../../../../../design-system/foundations/Icons';
import {
  ButtonHolder,
  Container,
  TitleHolder
} from './ParticipantsListDrawer.styles';
import { ParticipantItem } from '../../components/ParticipantItem';

export const ParticipantsListDrawer = ({ isOpen, close, participants }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      direction="right"
      size="40vw"
      overlayOpacity={0}
    >
      <Container>
        <TitleHolder>
          <Icon icon={Icons.UserGroup} variant="solid" />
          <Typography variant="paragraphBold">Pessoas na sala</Typography>
        </TitleHolder>
        {[...new Set(participants)].map((participant, index) => {
          return (
            <div key={index}>
              <ParticipantItem name={participant} />
              <Divider />
            </div>
          );
        })}
        <ButtonHolder>
          <Button size="small" variant="tertiary">
            Sair da sala
          </Button>
        </ButtonHolder>
      </Container>
    </Drawer>
  );
};
