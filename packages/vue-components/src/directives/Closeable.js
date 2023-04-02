module.exports = {
  bind(el) {
    function onClose() {
      el.dataset.isShown = 'false';
      showLabel.style.display = '';
      closeButton.style.display = 'none';
      content.style.display = 'none';
    }

    function onShow() {
      el.dataset.isShown = 'true';
      showLabel.style.display = 'none';
      content.style.display = '';
    }

    function onMouseOver() {
      if (el.dataset.isShown === 'false') {
        return;
      }
      closeButton.style.display = '';
    }

    function onMouseOut() {
      if (el.dataset.isShown === 'false') {
        return;
      }
      closeButton.style.display = 'none';
    }

    el.dataset.isShown = 'true';
    el.style.position = 'relative';
    const message = el.getAttribute('alt') || 'Expand Content';
    const content = document.createElement('div');
    content.classList.add('content');
    Array.from(el.children).forEach(child => content.append(child));
    el.replaceChildren();
    el.append(content);
    el.classList.add(`${el.className} closeable-wrapper`);
    const closeButton = document.createElement('span');
    closeButton.classList.add('closeable-button', 'label', 'label-default', 'hidden-print');
    closeButton.style.cssText += 'display: none; position: absolute; top: 0; left: 0; cursor: pointer;background: #d9534f';
    closeButton.innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
    el.append(closeButton);
    const showLabel = document.createElement('a');
    showLabel.classList.add('closeable-show', 'hidden-print');
    showLabel.style.cssText += 'display: none; cursor: pointer;text-decoration: underline';
    showLabel.innerHTML = message;
    el.append(showLabel);
    closeButton.addEventListener('click', onClose);
    showLabel.addEventListener('click', onShow);
    el.addEventListener('mouseover', onMouseOver);
    el.addEventListener('mouseout', onMouseOut);
  }
};
