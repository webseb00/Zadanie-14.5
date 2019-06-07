var Contact = React.createClass({
	propTypes: function() {
		item: React.PropTypes.object.isRequried;
	},
	render: function() {
		return (
			React.createElement('li', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 'Email: ' + this.props.item.email
				)
			)
		)
	}
});