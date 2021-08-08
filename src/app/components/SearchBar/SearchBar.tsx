import * as React from 'react';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
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
      if (e.value === 'none') {
        this.setState({
          city: 'none',
          state: e,
          cityList: [],
        });
      } else {
        let cityList = [{ value: 'none', label: 'Chọn thành phố...' }];
        if (mockData[e.value]) {
          cityList = cityList.concat(mockData[e.value]);
        }
        this.setState({
          city: 'none',
          state: e,
          cityList,
        });
      }
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
    const { cityList } = this.state;
    const stateList: Array<string> = Object.keys(mockData);
    const stateOptions = stateList.map(state => {
      const obj = {
        value: state,
        label: handleStateName(state),
      };
      return obj;
    });
    stateOptions.unshift({ value: 'none', label: 'Chọn bang...' });

    return (
      <div className="searchbar-wrapper translate3d--000">
        <form
          id="searchbar"
          className="d-flex align-items-center"
          onSubmit={this.handleSearch}
        >
          {['type', 'state', 'city'].map(item => {
            let placeholder = 'Chọn danh mục...';
            let options = [
              { value: 'none', label: 'Chọn danh mục...' },
              { value: 'room_for_rent', label: 'Phòng cho thuê' },
              { value: 'house_for_rent', label: 'Nhà cho thuê' },
              { value: 'share_room', label: 'Share phòng' },
              { value: 'share_house', label: 'Share nhà' },
            ];
            switch (item) {
              case 'state':
                placeholder = 'Chọn bang...';
                options = stateOptions;
                break;
              case 'city':
                placeholder = 'Chọn thành phố...';
                options = cityList;
                break;
              default:
                // nothing
                break;
            }
            return (
              <Select
                key={item}
                isDisabled={item === 'city' ? !cityList.length : false}
                className={`searchbar__select searchbar--${item}`}
                name={item}
                value={this.state[item]}
                onChange={e => {
                  this.handleSelect(item, e);
                }}
                placeholder={placeholder}
                options={options}
                menuPortalTarget={document.body}
                menuPosition={'fixed'}
              />
            );
          })}
          <Button
            variant="outline-primary"
            type="submit"
            className="custom-btn"
          >
            Tìm kiếm ...
          </Button>
        </form>
      </div>
    );
  }
}
