var Contact = React.createClass({
	propTypes: function() {
		item: React.PropTypes.object.isRequried;
	},
	render: function() {
		return (
			React.createElement('li', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png'
				}),
				// React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				// React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				// React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 'Email: ' + this.props.item.email
				// )
				React.createElement('div', {className: 'labelWrapper'}, 
					React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
					React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
					React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 'Email: ' + this.props.item.email
					)
				)
			)
		)
	}
});

