var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('form', {className: 'form'}, 
				React.createElement('input', {
					type: 'text',
					placeholder: 'Imię',
					value: this.props.contact.firstName,
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Imię',
					value: this.props.contact.lastName,
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Imię',
					value: this.props.contact.email,
				}),
				React.createElement('button', {type: 'submit'}, 'Dodaj kontakt')
			)
		)
	}
});