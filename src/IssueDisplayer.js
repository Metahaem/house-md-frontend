import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'


const IssueDisplayer = ({issue, symptoms}) => (
<div className='IssueDisplayer'>
  <Card>
    <Card.Content header={issue.name} />
    <Card.Content description={issue.description} />
    <Card.Content extra>
        <List>
            {symptoms.length ? symptoms.map(symp => {
                return <List.Item key={symp.id}>
                    <List.Icon name='first aid' />
                    <List.Content>{symp.name}</List.Content>
                </List.Item>
            }) : null}
        </List>
    </Card.Content>
  </Card>
</div>
)

export default IssueDisplayer