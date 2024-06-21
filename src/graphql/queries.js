import { gql } from '@apollo/client';

export const CONTENT_CARDS = gql`
  query ContentCards($keywords: String!) {
    contentCards(filter: { keywords: $keywords, limit: 20, types: [PODCAST] }) {
        edges {
            ... on Podcast {
                name
                image {
                    uri
                }
                experts {
                    title
                    firstName
                    lastName
                    company
                }
                categories {
                    name
                }
                updatedAt
            }
        }
    }
}
`;

// query ContentCards {
//     contentCards(filter: { keywords: "fas", limit: 20, types: [PODCAST] }) {
//         edges {
//             ... on Podcast {
//                 name
//                 image {
//                     uri
//                 }
//                 experts {
//                     title
//                     firstName
//                     lastName
//                     company
//                 }
//                 categories {
//                     name
//                 }
//                 updatedAt
//                 length
//                 hostedBy {
//                     firstName
//                     lastName
//                     company
//                     jobTitle
//                     persona
//                 }
//             }
//         }
//         meta {
//             total
//             offset
//             limit
//         }
//     }
// }

