import React from 'react'
import PropTypes from 'prop-types'

import * as districtService from './districtService'

class DistPicker extends React.Component {

    constructor(props) {
        super(props);
        this.selectProvince = this.selectProvince.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.selectDistrict = this.selectDistrict.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            "provinces": [],
            "cities": [],
            "districts": [],
            "currentProvince": '',
            "currentCity": '',
            "currentDistrict": ''
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            provinces: districtService.getProvinces()
        });
    }


    selectProvince(e) {
        const value = e.target.value;
        if (value !== this.props.placeholderProvince) {
            if (value !== this.state.currentProvince) {
                this.setState({
                    ...this.state,
                    currentProvince: value,
                    currentCity: '',
                    currentDistrict: '',
                    cities: districtService.getCities(districtService.getCodeByRegion(value)),
                    districts: []
                }, this.handleSelect);
            }
        }
        else {
            this.setState({
                ...this.state,
                currentProvince: '',
                currentCity: '',
                currentDistrict: '',
                cities: [],
                districts: []
            }, this.handleSelect);
        }
    }


    selectCity(e) {
        const value = e.target.value;
        if (value !== this.props.placeholderCity) {
            if (value !== this.state.currentCity) {
                this.setState({
                    ...this.state,
                    currentCity: value,
                    currentDistrict: '',
                    districts: districtService.getDistricts(districtService.getCodeByRegion(value)),
                }, this.handleSelect);
            }
        }
        else {
            this.setState({
                ...this.state,
                currentCity: '',
                currentDistrict: '',
                districts: []
            }, this.handleSelect);
        }
    }

    selectDistrict(e) {
        const value = e.target.value;
        if (value !== this.props.placeholderDistrict) {
            if (value !== this.state.currentDistrict) {
                this.setState({
                    ...this.state,
                    currentDistrict: value
                }, this.handleSelect);
            }
        }
        else {
            this.setState({
                ...this.state,
                currentDistrict: '',
            }, this.handleSelect);
        }
    }

    handleSelect() {
        if (this.props.onSelect) {
            this.props.onSelect({
                province: this.state.currentProvince,
                city: this.state.currentCity,
                district: this.state.currentDistrict
            });
        }
    }

    render() {
        return (
            <div className={this.props.pickerClass}>
                <select className={this.props.selectClass} onChange={this.selectProvince} value={this.state.currentProvince}>
                    <option>{this.props.placeholderProvince}</option>
                    {Object.keys(this.state.provinces).map((p, index) => <option key={index}>{this.state.provinces[p]}</option>)}
                </select>
                <select className={this.props.selectClass} onChange={this.selectCity} value={this.state.currentCity}>
                    <option>{this.props.placeholderCity}</option>
                    {Object.keys(this.state.cities).map((p, index) => <option key={index}>{this.state.cities[p]}</option>)}
                </select>
                <select className={this.props.selectClass} onChange={this.selectDistrict} value={this.state.currentDistrict}>
                    <option>{this.props.placeholderDistrict}</option>
                    {Object.keys(this.state.districts).map((p, index) => <option key={index}>{this.state.districts[p]}</option>)}
                </select>
            </div>
        )
    }

}

DistPicker.propTypes = {
    placeholderProvince: PropTypes.string,
    placeholderCity: PropTypes.string,
    placeholderDistrict: PropTypes.string,
    pickerClass: PropTypes.string,
    selectClass: PropTypes.string,
    onSelect: PropTypes.func,
};

DistPicker.defaultProps = {
    placeholderProvince: '—— 省 ——',
    placeholderCity: '—— 市 ——',
    placeholderDistrict: '—— 区 ——',
    pickerClass: '',
    selectClass: '',
};

export default DistPicker;