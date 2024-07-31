class Boletos():
    __tablename__ = 'boletos'

    def __init__(self,
                 Precio=0,
                 Gate=0,
                 Aerolinea="",
                 Terminal=0,
                 Asiento=0
                 ):
        self.Precio = Precio
        self.Gate = Gate
        self.Aerolinea = Aerolinea
        self.Terminal = Terminal
        self.Asiento = Asiento
