import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail author="Sam" time="4:45PM"
                comment="This is great!"
                image={faker.image.people()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" time="9:15AM"
                comment="Very informatiive"
                image={faker.image.cats()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane"  time="7:03AM"
                comment="I like it! It helped me out alot! "
                image={faker.image.fashion()}/>
            </ApprovalCard>

            <ApprovalCard>
                <p>Hello world</p>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));