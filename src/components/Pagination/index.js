import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import withWidth from 'material-ui/utils/withWidth';
import RefreshButton from 'components/Common/RefreshButton';

const styles = {
  button: {
    margin: '10px 0',
  },
  pageInfo: {
    padding: '1.2em',
  },
  mobileToolbar: {
    margin: 'auto',
  },
  toolbar: {
    backgroundColor: 'rgb(237, 236, 236)'
  }
};

class Pagination extends Component {
  range() {
    const input = [];
    const { page, perPage, total } = this.props;
    if (isNaN(page)) return input;
    const nbPages = Math.ceil(total / perPage) || 1;

    // display page links around the current page
    if (page > 2) {
      input.push('1');
    }
    if (page === 4) {
      input.push('2');
    }
    if (page > 4) {
      input.push('.');
    }
    if (page > 1) {
      input.push(page - 1);
    }
    input.push(page);
    if (page < nbPages) {
      input.push(page + 1);
    }
    if (page === (nbPages - 3)) {
      input.push(nbPages - 1);
    }
    if (page < (nbPages - 3)) {
      input.push('.');
    }
    if (page < (nbPages - 1)) {
      input.push(nbPages);
    }

    return input;
  }

  getNbPages() {
    return Math.ceil(this.props.total / this.props.perPage) || 1;
  }

  prevPage = (event) => {
    event.stopPropagation();
    if (this.props.page === 1) {
      throw new Error('navigation.page_out_from_begin');
    }
    this.props.setPage(this.props.page - 1);
  }

  nextPage = (event) => {
    event.stopPropagation();
    if (this.props.page > this.getNbPages()) {
      throw new Error('navigation.page_out_from_end');
    }
    this.props.setPage(this.props.page + 1);
  }

  gotoPage = (event) => {
    event.stopPropagation();
    const page = event.currentTarget.dataset.page;
    if (page < 1 || page > this.getNbPages()) {
      throw new Error('navigation.page_out_of_boundaries');
    }
    this.props.setPage(page);
  }

  renderPageNums() {
    return this.range().map((pageNum, index) =>
      (pageNum === '.') ?
        <span key={`hyphen_${index}`} style={{ padding: '1.2em' }}>&hellip;</span> :
        <FlatButton className="page-number" key={pageNum} label={pageNum} data-page={pageNum} onClick={this.gotoPage} primary={pageNum !== this.props.page} style={styles.button} />
    );
  }

  render() {
    const { page, perPage, total, width, refresh } = this.props;
    if (total === 0) return null;
    const offsetEnd = Math.min(page * perPage, total);
    const offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);
    const nbPages = this.getNbPages();

    return width === 1 ? (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup style={styles.mobileToolbar}>
          {page > 1 &&
            <IconButton onClick={this.prevPage}>
              <ChevronLeft color='#6200C0' />
            </IconButton>
          }
          <span style={styles.pageInfo}>{`${offsetBegin}-${offsetEnd} of ${total}`}</span>
          {page !== nbPages &&
            <IconButton onClick={this.nextPage}>
              <ChevronRight color='#6200C0' />
            </IconButton>
          }
        </ToolbarGroup>
      </Toolbar>
    ) : (
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild>
            <span className="displayed-records" style={styles.pageInfo}>{`${offsetBegin}-${offsetEnd} of ${total}`}</span>
            <RefreshButton refresh={refresh} label="Refresh" />
          </ToolbarGroup>
          {nbPages > 1 &&
            <ToolbarGroup>
              {page > 1 &&
                <FlatButton className="previous-page" primary key="prev" label="Prev" icon={<ChevronLeft />} onClick={this.prevPage} style={styles.button} />
              }
              {this.renderPageNums()}
              {page !== nbPages &&
                <FlatButton className="next-page" primary key="next" label="Next" icon={<ChevronRight />} labelPosition="before" onClick={this.nextPage} style={styles.button} />
              }
            </ToolbarGroup>
          }
        </Toolbar>
      );
  }
}

Pagination.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  total: PropTypes.number,
  width: PropTypes.number,
  setPage: PropTypes.func,
  refresh: PropTypes.func
};

export default withWidth()(Pagination);