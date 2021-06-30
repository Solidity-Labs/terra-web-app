import Button, { Submit } from "../../components/Button"
import Caption from "../../components/Caption"
import Table from "../../components/Table"
import DownloadCSV from "./DownloadCSV"
import HistoryItem from "./HistoryItem"

interface Props {
  data: Tx[]
  isLoading: boolean
  more?: () => void
}

const HistoryList = ({ data, isLoading, more }: Props) => {
  return !data.length ? null : (
    <>
      <Table
        caption={
          <Caption
            title="Transaction History"
            action={<DownloadCSV txs={data} />}
            loading={isLoading}
          />
        }
        rowKey="id"
        columns={[
          { key: "id", render: (id, item) => <HistoryItem {...item} /> },
        ]}
        dataSource={data}
        config={{ hideHeader: true }}
      />

      {more && (
        <Submit>
          <Button color="secondary" onClick={more} block loading={isLoading}>
            More
          </Button>
        </Submit>
      )}
    </>
  )
}

export default HistoryList
