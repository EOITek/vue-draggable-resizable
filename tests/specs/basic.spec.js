import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'

let wrapper

describe('Basic', function () {
  it('should render correctly', function () {
    wrapper = mount(VueDraggableResizable)

    expect(wrapper.vm.$el).to.be.ok
    expect(wrapper.element.tagName).to.equal('DIV')
    expect(wrapper.classes()).to.contain('vdr')
  })

  it('should render the elements in default slot', function () {
    wrapper = mount(VueDraggableResizable, {
      slots: {
        default: '<p>Resize Me</p>'
      }
    })

    expect(wrapper.find('p').exists()).to.be.true
    expect(wrapper.text()).to.equal('Resize Me')
  })

  it('should render the component with 8 handles by default', function () {
    wrapper = mount(VueDraggableResizable)

    expect(wrapper.findAll('div.handle').length).to.equal(8)
  })

  it('should provide named slots for each one of the handles', function () {
    wrapper = mount(VueDraggableResizable, {
      slots: {
        tl: '<span>TL</span>',
        tm: '<span>TM</span>',
        tr: '<span>TR</span>',
        mr: '<span>MR</span>',
        br: '<span>BR</span>',
        bm: '<span>BM</span>',
        bl: '<span>BL</span>',
        ml: '<span>ML</span>'
      }
    })
    // Vue inserts extra `data-` attributes because we use scoped CSS
    expect(wrapper.find('div.handle-tl').html()).to.contain('>TL</span>')
    expect(wrapper.find('div.handle-tm').html()).to.contain('>TM</span>')
    expect(wrapper.find('div.handle-tr').html()).to.contain('>TR</span>')
    expect(wrapper.find('div.handle-mr').html()).to.contain('>MR</span>')
    expect(wrapper.find('div.handle-br').html()).to.contain('>BR</span>')
    expect(wrapper.find('div.handle-bm').html()).to.contain('>BM</span>')
    expect(wrapper.find('div.handle-bl').html()).to.contain('>BL</span>')
    expect(wrapper.find('div.handle-ml').html()).to.contain('>ML</span>')
  })

  it('should not block event bubbling', function (done) {
    wrapper = mount(VueDraggableResizable, {
      slots: {
        default: '<input type="text" class="input" />'
      }
    })

    wrapper.find('.input').trigger('mousedown')

    expect(wrapper.emitted()).to.have.property('activated')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).to.contain('active')
      done()
    })
  })

  afterEach(() => wrapper.destroy())
})
