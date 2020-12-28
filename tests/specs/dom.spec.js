import { expect } from 'chai'
import { matchesSelectorToParentElements } from '@/utils/dom'
import div from '../div'

describe('fns', function () {
  const a = div()
  a.id = 'a'
  a.innerHTML = '<div id="b"><div id="c"></div></div>'
  const b = a.querySelector('#b')
  const c = a.querySelector('#c')

  describe('matchesSelectorToParentElements', function () {
    it('should works basically', function () {
      expect(matchesSelectorToParentElements(c, '#b', a)).to.be.true
      expect(matchesSelectorToParentElements(c, '#a', a)).to.be.true
      expect(matchesSelectorToParentElements(c, '#d', a)).to.be.false
    })

    it('should works without baseNode', function () {
      expect(matchesSelectorToParentElements(c, '#b')).to.be.true
      expect(matchesSelectorToParentElements(c, '#a')).to.be.true
    })
  })
})
