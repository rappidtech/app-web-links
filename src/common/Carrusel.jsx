import React, { Component} from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Slider from "react-slick";

export default class SwipeToSlide extends Component {
	render() {
		const { Content, onSelect } = this.props;
		const settings = {
		className: "center",
		infinite: true,
		centerPadding: "20px",
		slidesToShow: 3,
		swipeToSlide: true,
		afterChange: function(index) {
			if (onSelect && Content[index]) {
				onSelect(Content[index]);
			}
		}
		};
		return (
		<Container>
			<Slider {...settings}>
				{Content.map((item, index) => {
					return (
						<StyledDiv key={index} onClick={() => onSelect(item)}>
							<StyledImg src={item.img} alt={item.title} />
							<StyledP>{item.title}</StyledP>
						</StyledDiv>
					)
				})}
			</Slider>
		</Container>
		);
	}
}

const StyledDiv = styled.div`
    display: flex;
    margin: 0rem 1rem;
    padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`
const StyledP = styled.p`
    padding: 5px;
    font-size: 0.8rem;
    text-align: center;
`