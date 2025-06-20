import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

export function NutricionalTable() {
  const nutricionalData = [
    ["Vitamina D (µg)", "50", "333"],
    ["Vitamina B1 (mg)", "1,2", "100"],
    ["Vitamina B2 (mg)", "1,3", "108"],
    ["Vitamina B12 (µg)", "9,94", "414"],
    ["Cromo (µg)", "250", "714"],
    ["Zinco (mg)", "10", "91"],
    ["Cafeína (mg)", "200", "-"],
    ["Taurina (mg)", "238", "-"],
    ["Arginina (mg)", "100", "-"],
    ["Carnitina (mg)", "100", "-"],
    ["Antocianinas (mg)", "5", "-"],
  ]

  return (
    <Table className="border-2 border-foreground text-xs md:text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="uppercase text-center text-lg  md:text-2xl font-bold py-2" colSpan={3}>
            Informação Nutricional
          </TableHead>
        </TableRow>
        <TableRow className="">
          <TableHead className="py-2" colSpan={3}>
            <p>Porções por embalagem: 300mg</p>
            <p>Porções de 1,3g (2 cápsulas): 300mg</p>
          </TableHead>
        </TableRow>
        <TableRow className="border-t-8 border-foreground">
          <TableHead className="md:w-2/3"></TableHead>
          <TableHead className="text-center">1,2g</TableHead>
          <TableHead className="text-center">%VD(*)</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="border-b-4 border-foreground">
        {nutricionalData.map(([nutrient, amount, vd]) => (
          <TableRow key={nutrient} className="text-foreground">
            <TableCell>{nutrient}</TableCell>
            <TableCell className="text-center">{amount}</TableCell>
            <TableCell className="text-center">{vd}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow className="h-20"></TableRow>
        <TableRow >
          <TableCell className="text-foreground" colSpan={3}>* Percentual de valores diários fornecidos pela porção</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}