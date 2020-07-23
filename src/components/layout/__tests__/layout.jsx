import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Layout from '../index'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: `WeStudents.it`,
                },
            },
        }),
    )
})

describe('Layout', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Layout
                    className="homepage"
                    seo={{ title: 'WeStudents.it' }}
                    showBubbles
                    sections={[
                        () => <div>Section 1</div>,
                        () => <div>Section 2</div>,
                        () => <div>Section 3</div>,
                    ]}
                />,
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
