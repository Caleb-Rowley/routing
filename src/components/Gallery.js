import React, { Fragment } from 'react';
import logo from '../logo.svg'
import { Card, Icon, Image } from 'semantic-ui-react';


/* Instructions
  1. Replace image with an image of yourself
  2. Create a page with a gallery from Semantic UI (react.semantic-ui.com)
  3. Create a Git Repository of your own
  4. Upload this to that repository and slack Jace the link


  https://react.semantic-ui.com/views/card/

*/
// Home Page
const Gallery = () => (
    <Card.Group>
    <Card>
        <Image src= {logo} wrapped ui={true} />
        <Card.Content>
            <Card.Header>Image Title</Card.Header>
            <Card.Meta>
                <span className='date'>Image Author</span>
            </Card.Meta>
            <Card.Description>
                Image Description
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
        Image views
      </a>
        </Card.Content>
    </Card>
    <Card>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Image Title</Card.Header>
            <Card.Meta>
                <span className='date'>Image Author</span>
            </Card.Meta>
            <Card.Description>
                Image Description
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
        Image views
      </a>
        </Card.Content>
    </Card>
        <Card>
            <Image src={logo} wrapped ui={true} />
            <Card.Content>
                <Card.Header>Image Title</Card.Header>
                <Card.Meta>
                    <span className='date'>Image Author</span>
                </Card.Meta>
                <Card.Description>
                    Image Description
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
        Image views
      </a>
            </Card.Content>
        </Card><Card>
        <Image src= {logo} wrapped ui={true} />
        <Card.Content>
            <Card.Header>Image Title</Card.Header>
            <Card.Meta>
                <span className='date'>Image Author</span>
            </Card.Meta>
            <Card.Description>
                Image Description
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
        Image views
      </a>
        </Card.Content>
    </Card>
        <Card>
            <Image src={logo} wrapped ui={true} />
            <Card.Content>
                <Card.Header>Image Title</Card.Header>
                <Card.Meta>
                    <span className='date'>Image Author</span>
                </Card.Meta>
                <Card.Description>
                    Image Description
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
        Image views
      </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src={logo} wrapped ui={true} />
            <Card.Content>
                <Card.Header>Image Title</Card.Header>
                <Card.Meta>
                    <span className='date'>Image Author</span>
                </Card.Meta>
                <Card.Description>
                    Image Description
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
        Image views
      </a>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default Gallery