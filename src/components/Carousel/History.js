import React from 'react';
import PropTypes from 'prop-types';
import LeftArrowSvg from '../../assets/icons/left-arrow.svg';
import RightArrowSvg from '../../assets/icons/right-arrow.svg';

import {
  HistoryContainer,
  List,
  ListItem,
  HistoryButton,
  Left,
  Right,
  Icon,
} from './style';

const History = ({ items, current, onChangeSlide, onGoToPrev, onGoToNext }) => (
  <HistoryContainer>
    <Left>
      <Icon>
        <LeftArrowSvg onClick={onGoToPrev} />
      </Icon>
    </Left>
    <List>
      {items.map((_, index) => (
        <ListItem key={Math.random()}>
          <HistoryButton
            type="button"
            active={index === current}
            onClick={() => onChangeSlide(index)}
          />
        </ListItem>
      ))}
    </List>
    <Right>
      <Icon>
        <RightArrowSvg onClick={onGoToNext} />
      </Icon>
    </Right>
  </HistoryContainer>
);

History.propTypes = {
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  onChangeSlide: PropTypes.func.isRequired,
  onGoToPrev: PropTypes.func.isRequired,
  onGoToNext: PropTypes.func.isRequired,
};

export default History;
