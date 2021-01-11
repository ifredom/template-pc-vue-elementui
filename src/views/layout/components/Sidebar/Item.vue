<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    meta: {
      type: Object,
      default: () => {
        return {
          name: '',
          icon: ''
        };
      }
    }
  },
  render (h, context) {
    const { icon, name } = context.props.meta;
    const vnodes = [];
    if (icon) {
      // vnodes.push(<i class={'svg-icon icon iconfont ' + icon} />);
      vnodes.push(<svg-icon icon-class={icon} />);
    }

    if (name) {
      vnodes.push(<span slot='title'>{(name)}</span>);
    }
    return vnodes;
  }
};
</script>
