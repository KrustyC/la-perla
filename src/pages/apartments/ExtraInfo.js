import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import P from '../../uikit/P';

const Div = styled.div`
  display: flex;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 8rem;
  background: ${({ dark }) => (dark ? '#000' : '#333')};

  p {
    flex: 1;
    &:first-of-type {
      margin-right: 20px;
    }
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const ExtraInfo = () => {
  const { t } = useTranslation('apartments');

  return (
    <Div>
      <Side>
        <P>
          <Title>{t('facilitiesTitle')}:</Title>
          <br />
          {t('facilitiesList')}
        </P>
        <P>
          <Title>{t('pleaseNoteTitle')}:</Title>
          <br />
          {t('pleaseNoteText')}
        </P>
      </Side>
      <Side dark>
        <P>{t('other')}</P>
      </Side>
    </Div>
  );
};

export default ExtraInfo;
