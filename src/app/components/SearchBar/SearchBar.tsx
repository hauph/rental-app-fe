import * as React from 'react';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.scss';
import { mockData } from './mock-data/mock-data'; // Mock-data
import { SelectOption } from './SearchBar.d';

type Props = {};

type State = {
  cityList: Array<SelectOption>;
  [key: string]: string | SelectOption | Array<SelectOption>;
};

function handleStateName(state: string): string {
  const splitStateName = state.split('_');
  const arr = splitStateName.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  return arr.join(' ');
}

export default class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      type: 'none',
      state: 'none',
      city: 'none',
      cityList: [],
    };
  }

  handleSelect(type: string, e: SelectOption): void {
    if (type === 'state') {
      let cityList = [{ value: 'none', label: '...' }];
      cityList = cityList.concat(mockData[e.value]);
      this.setState({
        state: e,
        cityList,
      });
    } else {
      this.setState({
        [type]: e,
      });
    }
  }

  handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Display the key/value pairs
    // @ts-ignore
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  }

  render() {
    const { type, state, city, cityList } = this.state;
    const stateList: Array<string> = Object.keys(mockData);
    const stateOptions = stateList.map(state => {
      const obj = {
        value: state,
        label: handleStateName(state),
      };
      return obj;
    });
    stateOptions.unshift({ value: 'none', label: '...' });

    return (
      <div className="searchbar-wrapper translate3d--000">
        <h4 className="white-text">Tìm kiếm nhanh</h4>
        <form
          id="searchbar"
          className="d-flex align-items-center"
          onSubmit={this.handleSearch}
        >
          <Select
            className="searchbar__select searchbar--type"
            name="type"
            value={type}
            onChange={e => {
              this.handleSelect('type', e);
            }}
            placeholder="Chọn danh mục"
            options={[
              { value: 'none', label: '...' },
              { value: 'room_for_rent', label: 'Phòng cho thuê' },
              { value: 'house_for_rent', label: 'Nhà cho thuê' },
              { value: 'share_room', label: 'Share phòng' },
              { value: 'share_house', label: 'Share nhà' },
            ]}
          />

          <Select
            className="searchbar__select searchbar--state"
            name="state"
            value={state}
            onChange={e => {
              this.handleSelect('state', e);
            }}
            placeholder="Chọn bang"
            options={stateOptions}
          />

          <Select
            isDisabled={!cityList.length}
            className="searchbar__select searchbar--city"
            name="city"
            value={city}
            onChange={e => {
              this.handleSelect('city', e);
            }}
            placeholder="Chọn thành phố"
            options={cityList}
          />

          <Button variant="danger" type="submit">
            <FontAwesomeIcon icon={faSearch} />
            Tìm kiếm
          </Button>
        </form>
      </div>
    );
  }
}
