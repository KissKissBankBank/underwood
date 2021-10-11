import React from 'react'
import { DefaultDraftBlockRenderMap } from 'draft-js'
import { Map } from 'immutable'
import { Title } from '@kisskissbankbank/kitten'

export const customBlockRenderMap = DefaultDraftBlockRenderMap.merge(
  Map({
    'header-one': {
      element: 'span',
      wrapper: (
        <Title
          tag="h1"
          modifier="secondary"
          noMargin
          className="k-u-margin-bottom-singleHalf k-u-margin-bottom-double@s-up"
        />
      ),
    },
    'header-two': {
      element: 'span',
      wrapper: (
        <Title
          tag="h2"
          modifier="tertiary"
          noMargin
          className="k-u-margin-bottom-singleHalf k-u-margin-bottom-double@l-up"
        />
      ),
    },
    'header-three': {
      element: 'span',
      wrapper: (
        <Title
          tag="h3"
          modifier="quaternary"
          noMargin
          className="k-u-margin-bottom-singleHalf"
        />
      ),
    },
    'header-four': {
      element: 'span',
      wrapper: (
        <Title
          tag="h4"
          modifier="quinary"
          noMargin
          className="k-u-margin-bottom-single k-u-margin-bottom-singleHalf@s-up"
        />
      ),
    },
  }),
)
