# `paper-elements`

## `dropdown`

####   `should be required if field is required`

```html
<paper-dropdown-menu
  aria-autocomplete="none"
  aria-disabled="false"
  aria-haspopup="true"
  label="user name"
  no-animations=""
  required=""
  role="combobox"
>
  <paper-listbox
    aria-expanded="false"
    attr-for-selected="value"
    slot="dropdown-content"
  >
  </paper-listbox>
</paper-dropdown-menu>

```

## `textbox`

##   `single line`

####     `should set field title as label`

```html
<paper-input
  aria-disabled="false"
  auto-validate=""
  label="user name"
  tabindex="0"
  type="text"
>
</paper-input>

```

