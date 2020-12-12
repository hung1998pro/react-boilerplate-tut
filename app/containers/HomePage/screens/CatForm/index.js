import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectData } from '../../selectors';
import * as actions from '../../actions';
import Button from 'components/Button';
import CardList from 'components/CardList';

function CatForm({ data, dispatch }) {
  const [cats, setCats] = React.useState(null);

  React.useEffect(() => {
    setCats(data);
  }, [data]);

  return (
    <>
      <Button
        onClick={() => {
          dispatch(actions.getCats());
        }}
      >
        Get Cats
      </Button>
      {cats ? <CardList cats={cats} /> : null}
    </>
  );
}

CatForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CatForm);
