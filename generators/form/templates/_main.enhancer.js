import { compose } from 'redux'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form'<% if (styleType === 'localized') { %>
import { withStyles } from '@material-ui/core/styles'
import styles from './<%= name %>.styles'
<% } %>import { formNames } from 'constants'

export default compose(
  // Add handlers as props
  withHandlers({
    onSubmit: props => formValues => {
      console.log('form values:', formValues) // eslint-disable-line no-console
    }
  }),
  // Add form capabilities (including submit and validation handling)
  reduxForm({ form: formNames.<%= camelName %> || '<%= camelName %>' }),<% if (styleType === 'localized') { %>
  // Add styles as "classes" prop
  withStyles(styles)<% } %>
)
