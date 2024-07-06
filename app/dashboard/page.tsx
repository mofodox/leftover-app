'use client'

import Link from "next/link";

import { useMediaQuery } from "@uidotdev/usehooks";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Dashboard() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="header flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link href="/dashboard/create" className="rounded-full border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </Link>
      </div>

      <div className="dashboard-header-copy py-4">
        <p>
          You have <span className="font-bold text-yellow-500">$4,680.00</span> to spend.
        </p>
      </div>

      <div className="content-table py-4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}