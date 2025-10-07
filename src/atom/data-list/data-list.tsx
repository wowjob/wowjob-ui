import type { TDataList } from './data-list.type'

export const DataList = ({ id, list }: TDataList) => (
  <datalist id={id}>
    {list.map(({ value, name }) => (
      <option key={value} value={value}>
        {name}
      </option>
    ))}
  </datalist>
)
