import './styles.scss'

const FILTER_LABEL = 'Filter by year'
const FILTER_NO_VALUES = 'No values to filter.'


export function ListFilter({
  values,
  onValueSelected,
  selected }) {
  const cssClassName = 'list-filter'
  
  function submitHandler(event) {
    event.preventDefault()
    console.log('onSubmit')
  }

  function onChangeHandler(event) {
    onValueSelected(event.target.value)
  }

  const formMarkup = () => ( 
    <form onSubmit={submitHandler}>
      <label htmlFor='filter'>{FILTER_LABEL}</label>
      <select select={selected} onChange={onChangeHandler} name='filter' form="list-filter-form">
        {values.map(optionsMapping)}
      </select>
    </form>
  )

  const optionsMapping = (value, index) => (
    <option value={value} key={index}>{value}</option>
  );


  return (
   <div className={cssClassName} id='list-filter-form'>
    {values?.length > 0 ? formMarkup() : (<p>{FILTER_NO_VALUES}</p>)}
   </div> 
  )
}
