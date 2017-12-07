import React from 'react'

function NewProductForm({
  onCreateProduct
}) {
  return (
    <form
      onSubmit={ (event) => {
        // Prevent old-school form submission
        event.preventDefault()
        
        const form = event.target
        const elements = form.elements // Allows looking up fields using their 'name' attributes
        // Get entered values from fields
        const brandName = elements.brandName.value
        const name = elements.name.value

        // Pass this information along to the parent component
        onCreateProduct({ brandName, name })
      } }
    >
      <label
        className='mb-2'
      >
        {'Brand name: '}
        <input
          type='text'
          name='brandName'
        />
      </label>
      <label
        className='mb-2'
      >
        {'Name: '}
        <input
          type='text'
          name='name'
        />
      </label>
      <button>
        Create Product
      </button>
    </form>
  )
}

export default NewProductForm
